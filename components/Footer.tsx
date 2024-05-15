import Image from "next/image";
const Footer = ({ user, type }: SideBarProps) => {
  console.log(user, "user");

  return (
    <footer className="footer">
      {user && (
        <>
          <div
            className={
              type === "mobile-bar" ? "footer_name-mobile" : "footer_name"
            }
          >
            <p className="text-xl font-bold text-gray-700">{user?.name[0]}</p>
          </div>

          <div
            className={
              type === "mobile-bar" ? "footer_email-mobile" : "footer_email"
            }
          >
            <h1 className="text-14 truncate text-gray-700 font-semibold">
              {user?.name}
            </h1>
            <p className="text-14 truncate font-normal text-gray-600">
              {user?.email}
            </p>
          </div>

          <div className="footer_image">
            <Image src="/icons/logout.svg" width={30} height={30} alt="jsm" />
          </div>
        </>
      )}
    </footer>
  );
};

export default Footer;
