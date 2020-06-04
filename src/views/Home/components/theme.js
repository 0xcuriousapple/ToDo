import { createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";

const theme = createMuiTheme({
  palette: {
    g: green,
    gradient: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  },
  status: {
    danger: "orange",
  },
});

export default theme;
