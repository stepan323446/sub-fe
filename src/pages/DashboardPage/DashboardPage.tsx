import { useSeoHeader } from "@shared/hooks";
import { Container } from "@shared/ui";

const DashboardPage = () => {
  useSeoHeader({
    title: "Dashboard",
  });

  return (
    <>
      <Container>Dashboard Page</Container>
    </>
  );
};

export default DashboardPage;
