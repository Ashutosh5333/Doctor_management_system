import React, { useEffect, useState } from "react";
import {
  Box,  Button, Card,CardBody, FormControl,
  FormLabel,FormErrorMessage, FormHelperText,  Input,Image,  Stack,  Text,  VStack,  useColorModeValue,useToast,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import loginlogo from "../Images/loginlogo.jpg";
import { useDispatch } from "react-redux";
import { Loginpost } from "../Redux/AuthReducer/Action";

const Login = () => {
  const colorScheme = useColorModeValue("blue", "green");
  const [show, setShow] = useState(false);
  const [isEmail, setisEmail] = useState(false);
  const [isPassword, setisPassword] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();
  const dispatch = useDispatch()

  const [post, SetPost] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    SetPost({ ...post, [name]: value });
  };

  const handleClickShow = () => {
    setShow(!show);
  };

  const handleSubmit = () => {
    if (post.email !== ""  && post.password !== "") {
      dispatch(Loginpost(post))
      .then((res) =>{
        // console.log(res.payload.token)
         if(res.type === "LOGINUSERSUCESS" && res.payload.msg !== "loginSucessfull"){
          toast({
            position: "top",
            colorScheme: "red",
            status: "error",
            title: "Something went wrong",
          });
         }
         else{
          toast({
            position: "top",
            colorScheme: "green",
            status: "success",
            title: "Logged In Sucessfully",
          })
          localStorage.setItem("usertoken",JSON.stringify(res.payload.token))
          // navigate("/doctordash")
         }
      })
   
 } 
   if (post.email === "") {
     setisEmail(true);
   }
   if (post.password === "") {
     setisPassword(true);
   }
  
  };

  return (
    <>
      <Box  >
        <Box h="30vh">
          <Image w="250px" m="auto" src={loginlogo} />
        </Box>

        <Card maxW="lg" m="auto" mt="40px" >
          <CardBody h="60vh" >
            <Text
              textAlign={"center"}
              fontWeight={"600"}
              mb="5"
              color="#220f7a"
              fontSize={"1.8rem"}
            >
              {" "}
              Login{" "}
            </Text>

            <VStack maxW={"2xl"} spacing={5}>
            <FormControl id="email" isInvalid={isEmail}>
              <FormLabel
                mb="10px"
                color={isEmail ? "red" : "gray"}
                fontWeight={"400"}
                letterSpacing={0.5}
                fontSize={"1.1rem"}
              >
                {" "}
                Email{" "}
              </FormLabel>
              <Input
                type="email"
                name="email"
                placeholder="Email"
                bg="#e0e0de"
                borderRadius={"20"}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="password" isInvalid={isPassword}>
              <FormLabel
                mb="10px"
                fontWeight={"400"}
                letterSpacing={0.5}
                color={isEmail ? "red" : "gray"}
                fontSize={"1.1rem"}
              >
                {" "}
                Password{" "}
              </FormLabel>
              <Input
                name="password"
                bg="#e0e0de"
                borderRadius={"20"}
                placeholder="Password"
                type="password"
                onChange={handleChange}
              />
              {!isPassword ? (
                <FormHelperText h="10px"></FormHelperText>
              ) : (
                <FormErrorMessage color="red">
                  Password is required.
                </FormErrorMessage>
              )}
            </FormControl>
              <Button
                width="100%"
                size="lg"
                onClick={handleSubmit}
                bg="#050452"
                color="#fff"
                borderRadius={"20"}
              >
                Login
              </Button>
            </VStack>

            <Text
              m="auto"
              mt="5"
              textAlign={"center"}
              style={{ fontSize: "1em", color: "blue", fontWeight: "600" }}
            >
              {" "}
              Forgot password ?{" "}
            </Text>
          
        

            <Box

              display="flex"
              justifyContent={"space-around"}
              w="30vw"
              m="auto"
              mt="5"
            >
              <Box>
                <Image
                  w="50px"
                  src="data:image/png;base64,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"
                  alt="logo"
                />
              </Box>
              <Box>
                <Image
                  w="50px"
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIHBhESExATFBUQGBMbFxYYFRUXGBkYFRYXFxgWFRsaHSkgGBooHhgYIjEhJSouLy4uGB8zODYsNygtLi0BCgoKDQ0OGxAQGi4lICU3KystLS0tLS0uKy0uNS0vMjc2LS0tLS0uLy0tLS0tLS0tKy8tLy0tLTAtLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAgcBBQYEAwj/xABMEAACAQICBAkGCgcFCQAAAAAAAQIDEQQFBiExYQcSIkFRcXKBsRMUUpGhwhUyNDZCU4KSwdEjJjNic6KyFzXS4vAWJCVDZIOTo+H/xAAaAQEAAgMBAAAAAAAAAAAAAAAABQYBAwQC/8QANBEAAgEBBAcFCAMBAQAAAAAAAAECAwQFEbESITFBUXGBE2GRodEVIjIzNMHh8BQjclJC/9oADAMBAAIRAxEAPwC8QAAAAAAAAAYOYzjS+lgm40/0stztFfa5+71m2lRqVXhBYmqtXp0Y6VR4LPlx6HUGlx+kmGwLalV40l9GPKfVfZfvOBzPPK+ZX483xfQWqPs/G5rSWo3SttWXRer9OpB177eyjHq/RP780dli9One1KjHrlJv2K3iajEaU4uvL9txV0KKXtsaS4uSFOxWeGyC668yMqW+1VNs301ZYPzPbPNa9X41eb65y/M80qjntbfW2z53FzoUUtiOWU5y+Jt9WTjNx2NrqZ6qeZV6Xxa011TkvA8VxcOKe1CM5R2Nrk2bmhpLi6P/ADpPdKMX7WvxNrhdOakP2lGMt6k4v1O6fsORuLmidjs8/igssjop261U/hqPq8c8SzcBpRhsY7cfiN8000vvfF9puoSU4pppp86KYPbl2a1stlelUlH93an1p6u/acFa6YvXTlh3P99SUoX3Jaqsce9avJ+q5Fug5HKdNIV2o14+TfpK7i+tbY+1bzqadRVaalFqSetNO6a6U1tIitQqUXhNYE3QtFKusabxzXNH1ABpN4AAAAAAAAAAAAAAANdmma08qocapLbsS1yk+iK/HYeHSPP4ZLRsrTqSXJhzdcuhbuf1tVvjcZPHYl1KknKUud+CXMtxI2O73X9+eqPm/wAd/gRVvvKND3Ia5eS58Xvw8d2O1zvSOtmzavxKfNBPb2nz/wCtRpbkbi5YqdKFOOjBYIrFSrOrLSm8WTuLkLi57wPBO4uQuLjAE7i5C4uMATuLkLi4wBO4uQuLjAE7i5C4uMASubPJ88rZRO8JXi9sHrT/APu9e01Vxc8zhGa0ZLFHqE5QlpReD4otbJM7pZxTvF2mlyoPat66Vv8AA3BStGtLD1lOMnGUXdNamiw9GdJY5pBU6lo1V3KduddD6V3roVftl3OktOnrjw3r1X6yzWC81WehV1S8n6Pu37uB04AIslwAAAAAAAAAaDSXPY5LhbK0qk1yI+893i+9r3Z1mUMowEqktdtSjzyk9kV/rYmVNjsZPH4uVSo7ym9fRuS6EiRu+xds9Ofwrzfot/gRd5W7sI6EPifkuPN7vHXsca1eWJrSnOTlKTu29rZAwCypYFWMgwAYMgwADIMAAyDAAMgU4OrUUYpyb2JJtvqS2m+wOh2KxSvKEaafpPX6lrXfY11KtOmsZyS5m2lQqVXhTi3y9dhoQdlS4PptcrExXVTb8ZI+j4Pv+q/9X+c5/aNl/wC/KXodXsy2f8ecfU4kHZVOD+S+LiU+um17zPLU0FxEFqnSl1Np+1fielbrM9k15rNI8u7rWtsPNPJnLg9OZZdVyysoVY8WTV1rTurtX1PczynTGSksU8Uckoyi9GSwZkRk4yTTaa1prU01saMAyeSyNEtIvhOn5Ko7VYrb6a6VvXOu/pt1BSFGq6NWMotxlFppramtjRamjWcrOcBd2VSFlUjv5pLc/wA1zFdvGxKk+0h8L3cH6Ms92W/tl2dT4lsfFeq89vE3YAIslwAAAYeoycpp5m/mOW+Si+XXuuqK2+vZ6+g20aUqtRQjv/X4GqtWjRpupLYv3DrsOS0szp5vmTs/0dO6gunpl3/gjS3IXFy306cacVCOxFLq1JVZuctrJ3FyFxc9msncXIXFwCdxchcXAJ3FyFxcAnc3ejejdTOp8a/EpJ6521vpjFc737Fv2Hn0ayh51mKjrUI/tJLmj0Le9nrfMWzQoxw1GMIRUYxSSS2JIi7wtzo+5D4svzwJa7rvVf8AsqfCvN+iPJlmU0crpcWlTS6XtlLtPa+rYbEAr0pSk9KTxZZoxUVoxWCAAPJkAAArnhJ/val/D96Rydzq+Er+96P8P3pHI3LbYvp4cin3h9VPpkidxchcXOo4idz3ZHmssozGNSOtLVKPpJ7V1863pGuuZueZRjJOMlqZ7hKUJKUXg1sLuoVo4mjGcXeM0mn0p60fY4Xg7zbjQlhpP4t5U+q/Kj63fvfQd0VG00HQquD6d63fvEuVlrqvSVRb9vc9/wC8AADQdAKc0kzP4VzmpO/JvxYdlal69b+0WNphj/g/R+rJPlT5Eeuep23qPGfcVGTtz0dUqr5L7/bzIG+a+uNJc3kvv5Eri5gE2QJm4uYABm4uYABm4uYABm4uRPvgcP55jqdL03FeuSj+I1LWzKi28FtLQ0Jy74PyODa5dblS6n8Rfdt3tnREKcVCKSVktS7iZS6tR1Jub36y8UqapQUFsWr957QADWewD5Vqqo0nKTUYxTbbdkktrb6Di8z0/jSqONCl5RL6cm4p9S2267G6hZ6tZ4U1jkaK9ppUVjUeGb6LWdyCtP7QMT9VS+7L/EP7QMT9XR+7L/Edvsm0d3icntWy8X4Mnwlv/jFH+H70jkLmwzzOqmd4mNSpGKcY2Vk0rXb529es1pPWWnKnRjCW1Ir1rqRq1pTjsfoiVxcwDecxm4uYAB6cvxssvx1OrHbTkn19Mepq67y6MPXjisPGcXeM0pJ7mroo4svg8x3nOTOm3roSt9mXKj7eMu4h73o6VNVVtWp8n+cyauato1HSex61zX4yOtABXyxFe8J2L/TUKSexSlJdbsvB+s4g3enWJ840nra9UOKl9mKv7WzRXLfYqfZ2eC7sfHX9yoW6pp2ib78PDVmmSBG4udRyEgRuLgEgRuLgEgRuLgEjaaKQ4+keGX78X93X+BqLm30Pf6z4ftvwNVb5UuTyZus/zoc45ouUAFLLoAAAcVwl43yGXUqKdvLSblvULan3yT+yV2drwpv/AHnDdmp4wOIuWq7IpWaOG/F+bX2Kpecm7TJPdgvJP7kgRuLnecBIEbi4BIEbi4BIEbi4BI6ng6xaoZ66d9VaMlbfHlL2J+s5S57sgxHmud0J3txZxv1OSUvY2abRT7SjKPFPx3G+y1OzrQl3rw2PMu0AFMxLroso/PKnlc6xEvSqVH65M8NyVWfHqyfS2/W7kLl5isFgUeb0pOXHHMzcXMXFzJ4M3FzFxcAzcXMXFwDNxcxxjHGRnBjFErm40Qf60YftvwZpeMjcaHSvpTh+2/Bmqun2U+TyZts7XbQ/1HMugAFJLoAAAV3wqfKsN2anjE4W53HCs7YrDdmp4xOF4yLbdif8WHXNlTvJr+VPpkiVxcjxkOMjuwfA4sVxJXFzFxcwDNxcxcXAM3FzFxcAzcw3YXD2GUGsUXJ8PLcCsPhZ9IID2UuBY/ay4mpqLiVGuhtepmLnrzuHkc4rx9GpUXqk0eG5PReKTK/OOjJrhiTuLkbi5k8kri5G4uASuLkbmLgFscH9CFTRek3CLfGqa3FN/GZ0nmlP6uH3Y/kaDg6+atLtVP6mdOU22N/yKn+nmXCyfIhyWR5/NKf1cPux/IzHC04SuqcE+lRR9wc2LOgAAAAAA+VSjGr8aMZW6Un4kPM6f1cPux/I9AGLB5/M6f1cPux/IeZ0/q4fdj+R6Dz43ELC4SpUeynGUn9lN/gZ956kNS2lKZ7WVfO8RJWs5ztbo4zS9ljw3IJ6jNy8qOitFbtRSZS0m5Pfr8SVxcjcXMnklcXI3FwCVxcjcxJ8kJawzZ/B0gWZ/s5uBCe1Yk/7K7iu9OKHm2lOIVtU5Jrfx4qT9rZo7nccKuF4mPoVeacJRfXB3Xe1L+U4W5JWKfaWeEu5eWrNEZbIaFea78fHX9yVxcjcXOo5SVxcjcXAJXFyNxcGS3+Dn5q0u1V/rZ1By/Bx806Xaqf1M6gpds+oqf6eZbrIn2EOUckAAc50YMAAGAAAAAAZwYNHpliPNNGMRLpjxf8AySUPeN4cbwo1/JaPxj9ZUjfqjGUvFROixw07RCPejRapShRnJbkyrLi5G4uXQp5K4uRuLgEri5G4uASue7JMP55nFCna/HnBPqclf2XNfc6rg3wfnWkqnzUYzluu1xUv5r9xprz7OlKfBP8AfE3WeHaVYx70W6ACkYFy0mcxwgZf8IaNVGlyqLVRdUbqX8rk+4p0/QtSCqQaaummmulPaiic+y15Pm9Wi/oSfFfSnri/U133LFctbGEqT3a11/V4kDe1F6Uai5P7fc8AI3FybIYkCNxcAkCNxcAlYxYxcXM4viY0Y8DNjd6FL9acL2/dkaO5u9CvnXhe37sjVaG+xnr3PJm6zxXbQ1b1mXgACjlwAAAK04XPlWF7NXxgcBY7/hc+VYXs1fGBX9y33Y3/ABIdc2Va8UnaZ9MkSsNhG4ud2LOLBEgRuLmDJIEbi4BIEbi4BItHguy/yGUTrvbXlbuhdf1OXqRWeEw8sZioU4K8qklGK3ydlfcXzluDjl+Ap0o/FpRUVvstr3vb3kRfFbRpKmv/AFkvzh4ErdVHSqOpwzf4zPWACtFgBwXChk3nGCjiYLlUuTPfBvU+5v1SfQd6fGvRjiKMoSSlGaaknsaas0+43Wau6FVVFuy3mqvRVWm4Pefni4ubbSnJZZDm06Tu4vXTl6UHs71se9b0am5dYTjOKlHY9aKnOEoScZbULi4uLno8C4uLi4AuLi4uALm80Jf614Xt+7I0dzd6EfOvC9v3ZGm0fKnyeTN1n+bDmsy8gAUgtwAABWfC98qwvZq+MSvrlgcL/wAqwvZq+MCv7lvuz6SHXNlYvD6mfTJC4uLi53HELi4uLgC4uLi4AuLi568oy+ebZhTo01yqjtfmiueT3JazDaim3sR6jFyeC2nacF2TeVxMsVNcmF4098muVJdSdvtPoLOPHlmBhlmAp0aatGmrLfztve3dvez2FMtlodorOe7YuX7r6lrs1BUaah48wADmN4AABoNL8gjpBlbhqVSF3Tk+aXPF/uvY+58xSWIoyw1eUJxcZQbUovamtqP0YcVp5ol8MUfLUV+ngta+siubtrmfPsfNaXuu3Kk+yqP3XsfB+j3+JGW+xuqu0h8S8168CowZknGTTTTWpp6mmtqZG5ZyAwMgxcXAwMgxcXAwMm90H+dmF7fuyNDc3ug7/W3C9v3ZGq0fJnyeTNtnX9seazL1ABRi2gAAFY8MHyrC9mr4wK8LC4YflWF7NXxgV5ct91/SQ65srN4fUy6ZIyDFxc7zjwMgxcXAwMgxcXMmMCS1u3SXHoJo18B4DjzX6aqlxv3Y7VHr53vt0XNPwfaIOhxcXiI8rbSpv6PRUkvS6FzbdtrWKVu9Lep/003q3vj3cuPEnrvseh/bNa93d+cuoABCEqAAAAAAAAAcRpvoWs3i61BKNZfGjqUalvCe/n5+lVNWpSoVpQlFxlF2cWmmmuZp7D9IHN6U6KUdIaV2uJWiuTVS19U19KPtXM9pMWC9HSSp1dcdz3r1X6iNtlgVT36ep5/ko+4ubPPMgr5FieJWha/xZrXGXZl+D17jVFljOM1pReK4kFKEoPRksGSuLkQejySub7Qb53YXt+7I5832gvzuwvb92RptHyp8nkzdQ+bHmsy+AAUYtYAABV/DF8rwnZq+MCu7lh8MXyvCdmr4wK6Lhdn0kOubK1b/AKiXTJEri5EHecZK4uRPbleWVs2xSp0abnJ7bbEumT2RW9mG1FYvYZScngtp5Frduks3QfQbyHFxGLjytTp0X9HolUXpdEebn16luNE9CqWRpVKlqtf0vow/hp8/7z19Ws68rtvvTTTp0dm98eXd37ybsd36GE6m3hw/OXeAAQZKgAAAAAAAAAAAAAAHnxmEp43DuFSEZwltjJJorvSPg01ueEn/ANqb9kJvwl6yzAdNmtdazvGm+m5mmtZ6dVYTXqj845hgKuW4jiVqc6cuiStfeuZrejyn6OxmCp46hxKtOFSL+jKKkuvXz7zjc24M8NirujOdB9H7SHqb4y+93E7Z76pTWFVaL8V69MGRNW65rXTePPb6FRm/0F+d2E7fuyPfmPB1jcI3xYwrLphJJ23qdvUrny0RyuvgNL8L5WhUp8t/GhKK+LLY2tZ3TtFKpRm4ST1Pesdj3HNToVYVY6UWtazLvABSyygAAFW8MfyvCdmr4wK5LM4V8JUx2OwsaVOdRqNS6hGU2ruNrqK1bH6jnMu4P8djNtJUk+eckvZG8vYWy761OnZIOcktu197K/bKNSpaJaCb2bu5HLH2w2Hni66hThKcnsjFOTfci0Mp4MKNGzxFWVV+jFcSPU3rk+5o7TLcso5XR4lGlCmufiqze+T2ye9mqvfNGKwpLSfgvXyPdK7Kktc3h5v0K20d4NqmIanipeTj9XFpzfaeyPdd9RZWV5bRyrDKnSpxhFcy2t9Mntk97PaCCtNsrWh++9XBakv3iyWo2anRXuLrv/eQABym8AAAAAAAAAAAAAAAAAAAAAAAAAAMygAAYAAAAABlgAAwAAAAAAAAAAAAAAAf/9k=" alt="logo"
                />
              </Box>
            </Box>

            <Box  w="80%" m="auto" mt="15px" >  
            <Text textAlign={"center"} fontWeight={"600"}> Don't have an account ? 

               <Link to="/sign">
            <span style={{color:"blue"}} > Signup here </span> 
               </Link>
            
             </Text>
           </Box>

          </CardBody>
        </Card>
      </Box>
    </>
  );
};

export default Login;
