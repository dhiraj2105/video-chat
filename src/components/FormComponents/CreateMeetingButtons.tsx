import { EuiButton, EuiFlexGroup, EuiFlexItem } from "@elastic/eui";
import React from "react";
import { useNavigate } from "react-router-dom";

function CreateMeetingButtons({
  createmeeting,
}: {
  createmeeting: () => void;
}) {
  const navigate = useNavigate();
  return (
    <EuiFlexGroup>
      <EuiFlexItem grow={false}>
        <EuiButton color="danger" fill onClick={() => navigate("/")}>
          Cancel
        </EuiButton>
      </EuiFlexItem>
      <EuiFlexItem grow={false}>
        <EuiButton fill onClick={createmeeting}>
          Submit
        </EuiButton>
      </EuiFlexItem>
    </EuiFlexGroup>
  );
}

export default CreateMeetingButtons;
