import { ButtonGroup, ButtonLink } from "~/components/ButtonLink/ButtonLink";
import { Container } from "~/components/Container/Container";
import { Label } from "~/components/Label/Label";
import styles from "./NotFound.module.css";

type NotFoundProps = {
  title?: string;
  detail?: string | undefined;
};

export function NotFound({ title = "That page isn't here.", detail }: NotFoundProps) {
  return (
    <Container className={styles.page}>
      <Label>404</Label>
      <h1 className={styles.title}>{title}</h1>
      {detail ? <p className={styles.detail}>{detail}</p> : null}
      <ButtonGroup>
        <ButtonLink href="/">Go home</ButtonLink>
        <ButtonLink href="/work" variant="secondary">
          See my work
        </ButtonLink>
      </ButtonGroup>
    </Container>
  );
}
