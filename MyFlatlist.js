import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Alert,
  TextInput,
  TouchableHighlight,
  Button,
  Image,
  ScrollView,
} from "react-native";
import app from "./FirebaseConfig";
import { getDatabase, ref, onValue } from "firebase/database";
import { firebaseConfig } from "./FirebaseConfig";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  onSnapshot,
  doc,
  deleteDoc,
  updateDoc,
  query,
  where,
} from "firebase/firestore";
import Icon from "react-native-vector-icons/FontAwesome";

export default function MyFlatlist() {
  

  // const [isPressed, setIsPressed] = useState(false); // State to track the pressed state

  // const onPress = () => {
  //   setIsPressed(!isPressed); // Toggle the pressed state
  // };

  const [myburgers, setMyburgers] = useState([]);
  const [data1, setData1] = useState([]);

  const [data, setmydata] = useState([
    {
      key: 0,
      title1: "zinger burger",
      price: "Rs.400",
      images: require("./assets/image/img1.jpeg"),
    },
    {
      key: 1,
      title1: " plain burger",
      price: "Rs.290",
      images: require("./assets/image/img2.jpeg"),
    },
    {
      key: 2,
      title1: "special burger",
      price: "Rs.700",
      images: require("./assets/image/img5.jpeg"),
    },
    {
      key: 3,
      title1: "son of a bun",
      price: "Rs.900",
      images: require("./assets/image/img6.jpeg"),
    },
    {
      key: 4,
      title1: "rango tango",
      price: "Rs.900",
      images: require("./assets/image/image3.png.jpeg"),
    },
    {
      key: 5,
      title1: "ye cheese",
      price: "Rs.900",
      images: require("./assets/image/img4.jpeg"),
    },
  ]);

  const [myarray, setMyarray] = useState([
    {
      key: 0,
      title: "Burger",
      image: "nil",
    },
    {
      key: 1,
      title: "kebab",
      image: "nil",
    },
    {
      key: 2,
      title: "desserts",
      image: "nil",
    },
    {
      key: 3,
      title: "shawarma",
      image: "nil",
    },
    {
      key: 4,
      title: "pizza",
      image: "nil",
    },
    {
      key: 5,
      title: "Biryani",
      image: "nil",
    },
  ]);

  const Separator = () => {
    return (
      <View
        style={{
          height: 900,
          width: 5,
          backgroundColor: "burlywood",
        }}
      />
    );
  };

  const myOnClick = (item) => {
    Alert.alert("you selected: " + item.title);
  };

  // const press=(item)=>{
  //   Alert.alert('add to cart ?'+item.title)
  // }

  // //const usersCollection = firestore().collection('fastfood');
  // const usersCollection = firestore()
  // .collection('fastfood')
  // .get()
  // .then(collectionSnapshot => {
  //     console.log('Total users: ', collectionSnapshot.size);
  //     collectionSnapshot
  //         .forEach(documentSnapshot => {
  //             console.log('User ID: ', documentSnapshot.id,
  //                 documentSnapshot.data());
  //         });
  // });

  useEffect(() => {
    const dbFS = getFirestore();
    const snapshot = collection(dbFS, "fastfood");
    console.log("firestore receiving data");
    const q = query(snapshot, ref);
    onSnapshot(q, (snapshot) => {
      const fetchedData = snapshot.docs.map((doc) => doc.data());
      setData1(fetchedData);
      // let data = snapshot.docs
      //setData1(data)
      console.log("Fetched", snapshot.docs);
      snapshot.docs.map((doc) => {
        console.log(doc.data());
      });
    });
  }, []);

  useEffect(() => {
    //console.log('is this called ???')
    const db = getDatabase(app);
    const dbRef = ref(db, "fastfood");
    console.log("receiving data");
    onValue(dbRef, (snapshot) => {
      let data = snapshot.val();
      //console.log('data is ==',data.burgers.length)
      //console.log('data is ==',data.deals.length)
      // console.log('data is ==',data.recent.length)
      setMyburgers(data);
      // console.log('testing')
      // console.log('foodie moodie data---->', data)
      // setMyburgers(data[2].thirdarray)
    });
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "bisque" }}>
      <View style={styles.view1}>
        <Text
          style={{
            fontSize: 25,
            color: "black",
            fontWeight: 900,
            fontFamily: "Cochin",
          }}
        >
          Foodie Moodie
        </Text>

        <Text style={{ fontSize: 22, padding: 2 }}>
          Choose your favourite food:
        </Text>

        <TextInput
          style={{
            padding: 15,
            height: 30,
            borderColor: "black",
            borderWidth: 3,
            paddingHorizontal: 30,
            justifyContent: "center",
            backgroundColor: "lavenderblush",
            marginBottom: 2,
          }}
          placeholder="search your food here"
        ></TextInput>

        {/* <View style={[styles.buttonview]}>
          <Button style={{borderWidth:1,borderColor:'white'}}
           title='search'
           
           color='white'
           onPress={()=>Alert.alert('searching...')}
          ></Button>
          </View> */}
      </View>

      <View
        style={{
          flex: 0.06,
          backgroundColor: "bisque",
          flexDirection: "row",
          marginBottom: 0,
        }}
      >
        <View style={{ flex: 0.8, backgroundColor: "bisque" }}>
          <Text style={{ fontSize: 22, fontWeight: 400, marginTop: 5 }}>
            Food category:
          </Text>
        </View>
        <View
          style={{
            flex: 0.5,
            backgroundColor: "burlywood",
            justifyContent: "left",
            alignItems: "left",
            borderColor: "black",
            borderWidth: 2,
            marginBottom: 4,
            marginRight: 5,
            padding: 1,
          }}
        >
          <Button
            title="see all items:"
            color="black"
            onPress={() => Alert.alert("HELLO, no items here:(")}
          ></Button>
        </View>
      </View>

      <View style={styles.view2}>
        <View
          style={{
            flex: 0.3,
            padding: 2,
            backgroundColor: "burlywood",
            justifyContent: "center",
          }}
        >
          <FlatList
            horizontal={true}
            data={myarray}
            ItemSeparatorComponent={Separator}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{
                  // marginBottom:5,
                  padding: 0.6,
                  borderRadius: 8,
                  margin: 7,
                  borderWidth: 1,
                  backgroundColor: "lavenderblush",
                  flex: 1,
                  // flexDirection:'row',
                  height: 60,
                }}
                onPress={() => myOnClick(item)}
              >
                {/* <View style={{flex:0.5}}> </View> */}
                <Text
                  style={{
                    fontSize: 22,
                    color: "black",
                    fontWeight: "bold",
                    fontFamily: "Cochin",
                    padding: 15,
                    paddingHorizontal: 10,
                    paddingVertical: 18,
                    marginBottom: 10,
                  }}
                >
                  {item.title}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
        {/* <View style={{flex:0.1,backgroundColor:'lightgrey',alignItems:'left'}}>
                     <Text style={{fontSize:20,color:'black',marginRight:10,textAlign:'left'}}>Popular food:</Text>
                  </View> */}

        {/* <View style={{flex:0.7,backgroundColor:'red', marginTop:90,marginBottom:50}}>
</View> */}

        <Text
          style={{
            fontSize: 20,
            color: "black",
            marginRight: 10,
            textAlign: "left",
          }}
        >
          Popular food:
        </Text>
        <FlatList
          horizontal={true}
          // ItemSeparatorComponent={Separator}

          data={data1}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => (
<Category2 item={item} />


            
            
          )}
        />
        <Text
          style={{
            fontSize: 20,
            color: "black",
            marginRight: 10,
            textAlign: "left",
          }}
        >
          Best Sellers:
        </Text>
      </View>

      <View style={styles.view3}>
        <View
          style={{
            flex: 0.9,
            backgroundColor: "bisque",
            justifyContent: "center",
          }}
        >
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={true}
            data={myburgers}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => <CategoryCard item={item} />}
          />
        </View>
      </View>
    </View>
  );
}

const Category2 = ({ item }) => {

  const press = (item) => {
    Alert.alert("add to cart ?" + item.title);
  };


  const [isPressed, setIsPressed] = useState(false); // State to track the pressed state

  const onPress = () => {
    setIsPressed(!isPressed); // Toggle the pressed state
  };
  return (



<TouchableOpacity
              style={{
                // marginBottom:20,
                //backgroundColor:'red',
                //padding:10,
                flex: 1,
                //flexDirection:'row',
                //height:60,
              }}
              onPress={() => press(item)}
            >
              <View
                style={{
                  flex: 0.6,
                  padding: 20,
                  backgroundColor: "white",
                  marginTop: 70,
                  borderWidth: 4,
                  borderColor: "burlywood",
                  borderRadius: 20,
                  margin: 8,
                }}
              >
                <Image
                  source={{ uri: item.img }}
                  style={{
                    width: 130,
                    resizeMode: "cover",
                    height: 90,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                ></Image>

                <Text
                  style={{
                    fontSize: 16,
                    justifyContent: "center",
                    alignSelf: "center",
                  }}
                >
                  {item.title}
                </Text>
                <View style={{ flexDirection: "row" }}>
                <Text style={{ justifyContent: "center", alignSelf: "center" }}>
                  {item.price}
                </Text>
                <TouchableHighlight
                  underlayColor="transparent" // Set underlay color to transparent
                  onPress={onPress}
                  style={{ padding: 10 }}
                >
                  <Icon
                    name="heart"
                    size={20}
                    color={isPressed ? "red" : "black"} // Change color based on pressed state
                  />
                </TouchableHighlight>
                </View>
              </View>

              {/* <View style={{flex:0.8,backgroundColor:'brown',paddingHorizontal:10,paddingVertical:10,paddingBottom:30}}>
                  </View> */}
              {/* <View style={{flex:0.3,backgroundColor:'white'}}></View>
                   </View> */}
            </TouchableOpacity>
          )}
        




   










const CategoryCard = ({ item }) => {
  const press = (item) => {
    Alert.alert("add to cart ?" + item.title);
  };

  const [isPressed, setIsPressed] = useState(false); // State to track the pressed state

  const onPress = () => {
    setIsPressed(!isPressed); // Toggle the pressed state
  };
  return (
    <TouchableOpacity
      style={
        {
          // marginBottom:5,
          //backgroundColor:'pink',
          //flex:1,
          //flexDirection:'row',
          //height:60,
        }
      }
      onPress={() => press(item)}
    >
      <View
        style={{
          flex: 1.5,
          backgroundColor: "white",
          borderWidth: 4,
          borderColor: "burlywood",
          borderRadius: 20,
          margin: 8,
        }}
      >
        <Image
          source={{ uri: item.img }}
          style={{
            width: 140,
            marginRight: 30,
            height: 100,
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 10,
            resizeMode: "cover",
            margin: 10,
          }}
        ></Image>

        <Text style={{ fontSize: 16, marginRight: 50, alignSelf: "center" }}>
          {item.title}
        </Text>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              justifyContent: "center",
              alignSelf: "center",
              fontSize: 16,
              marginRight: 60,
            }}
          >
            {item.price}
          </Text>
          <TouchableHighlight
            underlayColor="transparent" // Set underlay color to transparent
            onPress={onPress}
            style={{ padding: 10 }}
          >
            <Icon
              name="heart"
              size={20}
              color={isPressed ? "red" : "black"} // Change color based on pressed state
            />
          </TouchableHighlight>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  view1: {
    marginTop: 30,
    flex: 0.15,
    backgroundColor: "bisque",
    alignItems: "left",
    justifyContent: "center",
  },
  view2: {
    flex: 0.6,
    marginBottom: 6,
    backgroundColor: "bisque",
    //flexDirection:'row',
  },
  view3: {
    flex: 0.3,
    backgroundColor: "bisque",
    // padding:10
  },
  buttonview: {
    flex: 0.4,
    //height:50,

    flexDirection: "row",
    borderWidth: 1.5,
    borderColor: "black",
    backgroundColor: "burlywood",
    marginLeft: 310,
    //alignSelf:'center',

    marginTop: 9,
    // paddingTop:10,
    // marginBottom:10,
    //paddingHorizontal:30,
    padding: 0.4,

    alignItems: "center",
    justifyContent: "center",
    // backgroundColor:'purple',
  },
});
