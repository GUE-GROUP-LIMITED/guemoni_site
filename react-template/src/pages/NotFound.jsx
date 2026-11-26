import { PageIntro, ButtonLink } from "../components/Shared";
export default function NotFound() {
  return (
    <>
      <PageIntro
        eyebrow="Page not found"
        title={
          <>
            Let’s get you
            <br />
            <em>back on track.</em>
          </>
        }
      >
        We couldn’t find that page. Head home to explore our services or contact
        our team.
      </PageIntro>
      <div className="container not-found-actions">
        <ButtonLink to="/">Back to home</ButtonLink>
      </div>
    </>
  );
}
