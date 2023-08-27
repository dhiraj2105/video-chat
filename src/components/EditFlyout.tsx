import React, { useEffect, useState } from "react";
import { FieldErrorType, MeetingType, UserType } from "../utils/Types";
import useAuth from "../hooks/useAuth";
import useFetchUsers from "../hooks/useFetchUsers";
import useToast from "../hooks/useToast";
import { useAppSelector } from "../app/hooks";
import moment from "moment";
import { firebaseDB } from "../utils/FirebaseConfig";
import { doc, updateDoc } from "firebase/firestore";
import {
  EuiFlyout,
  EuiFlyoutBody,
  EuiFlyoutHeader,
  EuiForm,
  EuiFormRow,
  EuiSpacer,
  EuiSwitch,
  EuiTitle,
} from "@elastic/eui";
import MeetingNameField from "./FormComponents/MeetingNameField";
import MeetingMeaximumUserField from "./FormComponents/MeetingMeaximumUserField";
import MeetingUsersField from "./FormComponents/MeetingUsersField";
import MeetingDateField from "./FormComponents/MeetingDateField";
import CreateMeetingButtons from "./FormComponents/CreateMeetingButtons";

function EditFlyout({
  closeFlyout,
  meeting,
}: {
  closeFlyout: any;
  meeting: MeetingType;
}) {
  useAuth();
  const [users] = useFetchUsers();
  const [createToast] = useToast();

  const [meetingName, setMeetingName] = useState(meeting.meetingName);
  const [selectedUsers, setSelectedUsers] = useState<Array<UserType>>([]);
  const [startDate, setStartDate] = useState(moment(meeting.meetingDate));
  const [size, setSize] = useState(1);
  const [meetingType] = useState(meeting.meetingType);
  const [status, setStatus] = useState(false);
  const [showErrors] = useState<{
    meetingName: FieldErrorType;
    meetingUser: FieldErrorType;
  }>({
    meetingName: {
      show: false,
      message: [],
    },
    meetingUser: {
      show: false,
      message: [],
    },
  });

  useEffect(() => {
    if (users) {
      const foundUsers: Array<UserType> = [];
      meeting.invitiedUsers.forEach((user: string) => {
        const findUser = users.find(
          (tempUser: UserType) => tempUser.uid === user
        );
        if (findUser) foundUsers.push(findUser);
      });
      setSelectedUsers(foundUsers);
    }
  }, [meeting, users]);

  const onUserChange = (selectedOptions: any) => {
    setSelectedUsers(selectedOptions);
  };

  const editMeeting = async () => {
    const editedMeeting = {
      ...meeting,
      meetingName,
      meetingType,
      invitedusrs: selectedUsers.map((user: UserType) => user.uid),
      maxUsers: size,
      meetingDate: startDate.format("L"),
      status: !status,
    };
    delete editedMeeting.docId;
    const docRef = doc(firebaseDB, "meetings", meeting.docId!);
    await updateDoc(docRef, editedMeeting);
    createToast({ title: "Meeting updated successfully", type: "success" });
    closeFlyout(true);
  };

  return (
    <EuiFlyout ownFocus onClose={() => closeFlyout()}>
      <EuiFlyoutHeader>
        <EuiTitle size="m">
          <h2>{meeting.meetingName}</h2>
        </EuiTitle>
      </EuiFlyoutHeader>
      <EuiFlyoutBody>
        <EuiForm>
          <MeetingNameField
            label="Meeting name"
            isInvalid={showErrors.meetingName.show}
            error={showErrors.meetingName.message}
            placeholder="Meeting Name"
            value={meetingName}
            setMeetingName={setMeetingName}
          />
          {meetingType === "anyone-can-join" ? (
            <MeetingMeaximumUserField value={size} setValue={setSize} />
          ) : (
            <MeetingUsersField
              label="Invite Users"
              isInvalid={showErrors.meetingUser.show}
              error={showErrors.meetingUser.message}
              options={users}
              onChange={onUserChange}
              selectedOptions={selectedUsers}
              singleSelection={
                meetingType === "1-on-1" ? { asPlainText: true } : false
              }
              isClearable={false}
              placeholder="Select Users"
            />
          )}
          <MeetingDateField selected={startDate} setStartDate={setStartDate} />
          <EuiFormRow display="columnCompressedSwitch" label="Cancel Meeting">
            <EuiSwitch
              showLabel={false}
              label="Cancel Meeting"
              checked={status}
              onChange={(e) => setStatus(e.target.checked)}
            />
          </EuiFormRow>
          <EuiSpacer />
          <CreateMeetingButtons
            createmeeting={editMeeting}
            isEdit
            closeFlyout={closeFlyout}
          />
        </EuiForm>
      </EuiFlyoutBody>
    </EuiFlyout>
  );
}

export default EditFlyout;