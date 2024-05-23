import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Onboarding1 from './screens/Onboarding1';
import Onboarding2 from './screens/Onboarding2';
import Onboarding3 from "./screens/Onboarding3"
import Home from './screens/Home';

const Stack = createStackNavigator();
export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="H" component={Onboarding1} options={{ headerShown: false }} />
        <Stack.Screen name="O2" component={Onboarding2} options={{ headerShown: false }} />
        <Stack.Screen name="O3" component={Onboarding3} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// function OnboardingScreen({ navigation }) {
//   const handleDone = () => {
//     navigation.navigate('Home');
//   };

//   return (

//     <Onboarding
//       nextLabel={<View onPress={handleDone}className="bg-[#519DD5] rounded-2xl"><Text className="p-4 text-white text-xl">Tiếp theo</Text></View>}
//       skipLabel={<View className="rounded-2xl"><Text className="p-4 text-gray-300 text-xl">Bỏ qua</Text></View>}
//       bottomBarColor="#fff"
//       onDone={handleDone}
//       pages={[
//         {
//           backgroundColor: '#fff',
//           image: <Image className="w-[200] h-[250]" source={require('./assets/fish.png')} />,
//           title: <Text className="w-full px-10 text-2xl font-bold text-[#519DD5]">Thu chi thông minh,{'\n'}ví tiền rủng rỉnh</Text>,
//           subtitle: <Text className="w-full px-10 text-xl py-2 text-[#519DD5]">Thiết lập mục tiêu tiết kiệm,{'\n'}quản lý các khoản vay</Text>,
//         },
//         {
//           backgroundColor: '#fff',
//           image: <Image className="w-[250] h-[250]" source={require('./assets/pic.png')} />,
//           title: <Text className="w-full px-10 text-2xl font-bold text-[#519DD5]">Lập kế hoạch ngân sách {'\n'}nhanh chóng</Text>,
//           subtitle: <Text className="w-full px-10 text-xl py-2 text-[#519DD5]">Sử dụng tính năng kiểm soát ngân sách {'\n'} trong vòng 5 phút</Text>,
//         },
//         {
//           backgroundColor: '#fff',
//           image: <Image className="w-[312] h-[250]" source={require('./assets/chart.png')} />,
//           title: <Text className="w-full px-10 text-2xl font-bold text-[#519DD5]">Theo dõi chi tiêu hàng ngày</Text>,
//           subtitle: <Text  className="w-full px-10 text-xl py-2 text-[#519DD5]">Xem dữ liệu phân tích {'\n'}và thống kê chi tiêu </Text>,
//         }
//       ]}
//     />

//   );
// }
