import React, { useCallback } from "react";
import { Pressable } from "react-native";
import { Button as RNButton } from "@ui-kitten/components";

import { Colors } from "../config";

export const Button = ({
  children,
  onPress,
  activeOpacity = 0.3,
  borderless = false,
  title,
  style,
}) => {
  const _style = useCallback(({ pressed }) => [
    style,
    { opacity: pressed ? activeOpacity : 1 },
  ]);

  if (borderless) {
    return (
      <RNButton
        size="medium"
        onPress={onPress}
        style={_style}
        appearance="ghost"
        status="info"
      >
        {title}
      </RNButton>
    );
  }

  return (
    <Pressable onPress={onPress} style={_style}>
      {children}
    </Pressable>
  );
};
