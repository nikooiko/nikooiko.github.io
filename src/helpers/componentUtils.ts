import {useTheme, Theme} from "@material-ui/core/styles";
import {useMediaQuery} from "@material-ui/core";

export const isMobile = (): boolean => {
  const theme = useTheme<Theme>();
  return !!useMediaQuery(theme.breakpoints.down("xs"));
};
