
import MenuButton from "./MenuButton";
import Link from "next/link";

const MenuItem = () => {
  return (
    <div className=" flex gap-5">
      <Link href="/all">
        {" "}
        <MenuButton title="ALL"></MenuButton>
      </Link>
      <Link href="/men">
        {" "}
        <MenuButton title="MEN"></MenuButton>
      </Link>
      <Link href="/women">
        {" "}
        <MenuButton title="WOMEN"></MenuButton>
      </Link>
      <Link href="/kids">
        {" "}
        <MenuButton title="KIDS"></MenuButton>
      </Link>
    </div>
  );
};

export default MenuItem;
