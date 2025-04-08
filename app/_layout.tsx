import { Stack } from 'expo-router/stack';
import '../global.css'
export default function RootLayout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}
