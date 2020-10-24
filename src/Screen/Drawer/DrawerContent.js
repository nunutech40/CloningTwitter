import React, {useContext} from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer'
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import { AuthContext } from '../../auth/Context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMI from 'react-native-vector-icons/MaterialIcons';
import IconAD from 'react-native-vector-icons/AntDesign';
import IconII from 'react-native-vector-icons/Ionicons';
import IconF from 'react-native-vector-icons/Feather';
import IconFA from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator } from '@react-navigation/stack';

const ProfilStack = createStackNavigator();

const DrawerContent = (props) => {
    const paperTheme = useTheme();
    const { signOut, toggleTheme } = useContext(AuthContext)

    return (
        <View style={{flex: 1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flex:1, alignItems: 'flex-start', marginTop: 15}}>
                            <Avatar.Image 
                                source={require('../../../assets/potoprofile.jpg')}
                                size={50}
                            />
                            
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                            <View style={{flexDirection:'column', alignItems: 'flex-start',flex: 1}}>
                                <Title style={styles.title}>Nunu Nugraha</Title>
                                <Caption style={styles.caption}>@NugrahaNunu</Caption>
                            </View>
                            <TouchableOpacity style={{marginRight: 15}}>
                                <IconMI
                                    name="keyboard-arrow-down"
                                    color="#1ca1f2"
                                    size={27}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                                <Caption style={styles.caption}>Following</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>100</Paragraph>
                                <Caption style={styles.caption}>Followers</Caption>
                            </View>
                        </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Profile"
                            onPress={() => {props.navigation.navigate('ProfileScreen')}}
                        >
                        </DrawerItem>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <IconAD 
                                name="profile" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Daftar"
                            onPress={() => {props.navigation.navigate('DaftarScreen')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="android-messages" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Topik"
                            onPress={() => {props.navigation.navigate('TopicScreen')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <IconFA
                                name="bookmark-o" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Markah"
                            onPress={() => {props.navigation.navigate('MarkahScreen')}}
                        />
                         <DrawerItem 
                            icon={({color, size}) => (
                                <IconFA 
                                name="flash" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Momen"
                            onPress={() => props.navigation.navigate('MomenScreen')}
                        />
                    </Drawer.Section>
                    <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={() => {toggleTheme()}}>
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={paperTheme.dark}/>
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="exit-to-app" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => {signOut()}}
                />
            </Drawer.Section>
        </View>
    )
}

const MomenScreen = ({ navigation }) =>  {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Test Momen Screen</Text>
        </View>
    )
}

export default DrawerContent;

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
      },
      userInfoSection: {
        paddingLeft: 20,
      },
      title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
      },
      caption: {
        fontSize: 14,
        lineHeight: 14,
      },
      row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
      },
      section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
      },
      paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
      },
      drawerSection: {
        marginTop: 15,
      },
      bottomDrawerSection: {
          marginBottom: 15,
          borderTopColor: '#f4f4f4',
          borderTopWidth: 1
      },
      preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
      },
})
