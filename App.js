import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";

import { ThemeContext } from "./src/config/theme";
import { RootNavigator } from "./src/navigation/RootNavigator";
import { AuthenticatedUserProvider } from "./src/providers";

const App = () => {
  const [theme, setTheme] = React.useState("light");

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
  };
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <ApplicationProvider {...eva} theme={eva[theme]}>
          <AuthenticatedUserProvider>
            <SafeAreaProvider>
              <RootNavigator />
            </SafeAreaProvider>
          </AuthenticatedUserProvider>
        </ApplicationProvider>
      </ThemeContext.Provider>
    </>
  );
};

export default App;
