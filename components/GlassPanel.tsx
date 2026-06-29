import { Card } from "@mui/material";
import { styled } from "@mui/system";

// Frosted-glass surface used across the site for a layered, modern feel.
const GlassPanel = styled(Card)(() => ({
  position: "relative",
  backgroundColor: "rgba(20, 25, 37, 0.55)",
  backdropFilter: "blur(16px) saturate(140%)",
  WebkitBackdropFilter: "blur(16px) saturate(140%)",
  border: "1px solid rgba(255, 255, 255, 0.08)",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.35)",
  padding: "1.75rem 2rem",
  transition: "transform .25s ease, box-shadow .25s ease, border-color .25s ease",
  "&:hover": {
    transform: "translateY(-2px)",
    borderColor: "rgba(255, 127, 166, 0.35)",
    boxShadow: "0 14px 44px rgba(0, 0, 0, 0.45)",
  },
}));

export default GlassPanel;
