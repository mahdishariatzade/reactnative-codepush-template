import {Text, View} from "react-native";
import codePush from "react-native-code-push";

const App = () => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Text>try editing me🎉</Text>
        </View>
    );
};
const MyApp = codePush(App)
export default MyApp;
