import FooterCompenent from "../../components/footer/content";

export default function GlobalLayout({ children }: React.PropsWithChildren) {
  return (
    <div>
      <div className="mx-auto w-11/12 lg:w-10/12">{children}</div>
      <FooterCompenent />
    </div>
  );
}
