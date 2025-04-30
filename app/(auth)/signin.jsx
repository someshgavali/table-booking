import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Formik } from "formik";
import * as Yup from "yup";
import logo from "../../assets/images/dinetimelogo.png";
import frame from "../../assets/images/Frame.png";
import { useRouter } from "expo-router";
import SignUpSchema from "../../utlis/authSchema";

const SignUp = () => {
  const router = useRouter();

  const handleSignIn = (values) => {
    console.log("Sign Up", values);
  };

  return (
    <SafeAreaView className="bg-[#2b2b2b] flex-1">
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View className="flex items-center justify-center mt-8">
          <Image source={logo} style={{ width: 200, height: 100 }} />
          <Text className="text-lg text-center mb-8 font-bold text-white">
            Let's Get Started
          </Text>
        </View>

        <View className="px-6">
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={SignUpSchema}
            onSubmit={handleSignIn}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <View>
                <Text className="text-[#f49b33] font-semibold mb-1">Email</Text>
                <TextInput
                  keyboardType="email-address"
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  placeholder="Enter your email"
                  placeholderTextColor="#aaa"
                  className="bg-[#3b3b3b] text-white p-3 rounded-lg mb-4"
                />
                {errors.email && touched.email && (
                  <Text className="text-red-500 mb-2">{errors.email}</Text>
                )}

                <Text className="text-[#f49b33] font-semibold mb-1">
                  Password
                </Text>
                <TextInput
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  secureTextEntry
                  placeholder="Enter your password"
                  placeholderTextColor="#aaa"
                  className="bg-[#3b3b3b] text-white p-3 rounded-lg mb-4"
                />
                {errors.password && touched.password && (
                  <Text className="text-red-500 mb-2">{errors.password}</Text>
                )}

                <TouchableOpacity
                  onPress={handleSubmit}
                  className="p-3 bg-[#f49b33] rounded-lg mt-4"
                >
                  <Text className="text-lg font-semibold text-center text-black">
                    Sign In
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </Formik>
        </View>
        <View className="flex items-center justify-center my-4">
          <TouchableOpacity className="p-2 mt-5 mx-6 items-center">
            <Text className="text-lg font-semibold text-center text-white">
              New User?{" "}
              <Text
                className="text-[#f49b33] underline"
                onPress={() => router.push("/signup")}
              >
                Sign Up
              </Text>
            </Text>
          </TouchableOpacity>
          <Text className="text-center text-lg font-semibold mb-4 text-white">
            <View className="border-b-2 border-[#f49b33] p-2 mb-1 w-24" /> or{" "}
            <View className="border-b-2 border-[#f49b33] p-2 mb-1 w-24" />
          </Text>
          <TouchableOpacity className="p-2 mb-5 mx-6 items-center">
            <Text className="text-lg font-semibold text-center text-white">
              Be a
              <Text
                className="text-[#f49b33] underline"
                onPress={() => router.push("/home")}
              >
                {" "}
                Guest User
              </Text>
            </Text>
          </TouchableOpacity>
        </View>

        <View className="flex-1 items-center justify-end mt-10">
          <Image
            source={frame}
            style={{ width: "100%", height: 200 }}
            resizeMode="contain"
          />
        </View>

        <StatusBar barStyle="light-content" backgroundColor="#2b2b2b" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
