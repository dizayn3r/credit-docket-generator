import { docketTheme } from "./theme";
import { typography } from "./typography";

export default function DocumentHeaderPreview({ headerData }) {
  return (
    <>
      <h1
        style={{
          ...typography.title,
          color: docketTheme.colors.heading,
        }}
      >
        {headerData.title} ({headerData.academicYear})
      </h1>

      <h2
        style={{
          ...typography.subtitle,
          color: docketTheme.colors.heading,
        }}
      >
        {headerData.subtitle}
      </h2>
    </>
  );
}
