import { useSeoHeader } from "@/shared/hooks";
import { LabelDashboard } from "@/widgets";

const LabelsSettingsPage = () => {
  useSeoHeader({
    title: "My Labels",
    description: "",
  });

  return (
    <>
      <LabelDashboard />
    </>
  );
};

export default LabelsSettingsPage;
