import "./styles.css";
import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/oganisms/user/UserCard";

const user = {
  name: "吹越俊明",
  image: "https://source.unsplash.com/NE0XGVKTmcA",
  email: "https://apple.com",
  phone: "090-4914-2017",
  company: {
    name: "株式会社アストリア"
  },
  website: "http://google.com"
};

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>これはメインボタン</PrimaryButton>
      <br />
      <SecondaryButton>これは解除ボタン</SecondaryButton>
      <br />
      <SearchInput></SearchInput>
      <UserCard user={user} />
    </div>
  );
}
