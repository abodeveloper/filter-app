import Container from "@/components/container/Container";
import CreateAccountForm from "@/components/ui/create-account-form/CreateAccountForm";
import MainLayout from "@/components/main-layout/MainLayout";

const CreateAccount = () => {
  return (
    <MainLayout>
      <Container maxWidth="max-w-[800px]">
        <CreateAccountForm />
      </Container>
    </MainLayout>
  );
};

export default CreateAccount;
