import "@/global.css";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-primary">
        Welcome to Nativewind!
      </Text>
      <Link
        href="/onboarding"
        className="text-primary underline mt-4 bg-accent py-2 px-4 rounded-md"
      >
        Go to Onboarding
      </Link>
      <Link
        href="/(auth)/sign-in"
        className="text-primary underline mt-4 bg-accent py-2 px-4 rounded-md"
      >
        Go to Sign In
      </Link>
      <Link
        href={{
          pathname: "/(tabs)/subscriptions/[id]",
          params: { id: "123" },
        }}
        className="text-primary underline mt-4 bg-accent py-2 px-4 rounded-md"
      >
        Go to Subscription Detail
      </Link>
    </View>
  );
}
