import Container from "@/components/container/Container";
import MainLayout from "@/components/main-layout/MainLayout";
import PersonalInformationForm from "@/components/ui/personal-information-form/PersonalInformationForm";

const PersonalInformation = () => {
  return (
    <MainLayout>
      <Container maxWidth="max-w-[800px]">
        <PersonalInformationForm />
      </Container>
    </MainLayout>
  );
};

export default PersonalInformation;
