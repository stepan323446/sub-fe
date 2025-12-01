import { useEffect } from "react";
import { useUpdateUserInfo } from "@/entities/User/model/hooks/useUpdateUserInfo";
import SectionCard from "@/shared/ui/SectionCard/SectionCard";
import useAllCurrencies from "@/entities/Currency/model/hooks/useAllCurrencies";
import UserInfoForm from "@/features/UserInfoForm";

const GeneralSettingsPage = () => {
  const { mutate } = useUpdateUserInfo();

  useEffect(() => {
    mutate(
      {
        username: "david",
        limit: 10,
        currency: 1,
        isMondayFirst: true,
        notificationEmailEnable: false,
        newsEmailEnable: true,
      },
      {
        onSuccess: (data) => console.log("Success:", data),
        onError: (err) => console.error("Error:", err),
      },
    );
  }, [mutate]);

  const { data } = useAllCurrencies();

  console.log("Currencies:", data);

  //   interface FormValues {
  //   limit: "string"
  // }

  return (
    <>
      <div>
        <SectionCard title="General"></SectionCard>
        <UserInfoForm></UserInfoForm>
      </div>
    </>
  );
};

export default GeneralSettingsPage;
