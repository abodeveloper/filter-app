import Container from "@/components/container/Container";
import EducationalDetails from "@/components/ui/educational-details-form/EducationalDetailsForm";
import MainLayout from "@/components/main-layout/MainLayout";

const EducationalDetailsPage = () => {
  return (
    <MainLayout>
      <Container maxWidth="max-w-[800px]">
        <EducationalDetails />
      </Container>
    </MainLayout>
  );
};

export default EducationalDetailsPage;
