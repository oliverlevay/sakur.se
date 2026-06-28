import { useTheme } from "@mui/material";

// Official Foresight Data Machines lockup (https://www.foresightdatamachines.com/).
// The asset is white-on-transparent, so we invert it to black in light mode.
const ForesightLogo = () => {
  const theme = useTheme();
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/images/foresight-logo.png"
      alt="Foresight Data Machines"
      style={{
        height: 34,
        width: "auto",
        filter: theme.palette.mode === "light" ? "invert(1)" : "none",
      }}
    />
  );
};

export default ForesightLogo;
