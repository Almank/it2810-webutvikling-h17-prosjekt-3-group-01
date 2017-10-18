import React, { Component } from "react";
import {StyleSheet, Text, View, FlatList, AsyncStorage, Button, TextInput, Keyboard, Platform, TouchableHighlight} from "react-native";
import {TodoItemLink} from "./TodoItemLink";

const isAndroid = Platform.OS === "android";
const viewPadding = 10;

export class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            categories: {},
            text: ""

        };
        this.changeTextHandler = this.changeTextHandler.bind(this);
        this.addTask = this.addTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.addCategory = this.addCategory.bind(this);
        this.deleteCategory = this.deleteCategory.bind(this);
        this.loadData();
    }

    //Inital async load of data that has to be done outside the constructor
    async loadData(){
        let categories;
        try {
            categories = await AsyncStorage.getItem('categories');
            if (categories !== null){
                categories = JSON.parse(categories);
                this.setState({categories: categories['categories']});
            }
        } catch (error) {
            console.log(error);
        }
    }

    updateAsyncStorage(){
        let data = this.state;
        try{
            AsyncStorage.setItem("categories", JSON.stringify(data));
        } catch (error){
            console.log(error);
        }
    }

    componentDidMount() {
        Keyboard.addListener(
            isAndroid ? "keyboardDidShow" : "keyboardWillShow",
            e => this.setState({ viewMargin: e.endCoordinates.height + viewPadding })
        );

        Keyboard.addListener(
            isAndroid ? "keyboardDidHide" : "keyboardWillHide",
            () => this.setState({ viewMargin: viewPadding })
        );
    }

    changeTextHandler(text){
        this.setState({ text: text });
    };

    addCategory(){
        let notEmpty = this.state.text.trim().length > 0;
        if (notEmpty) {
            let tasks = this.state.categories;
            tasks[this.state.text] = {title: this.state.text, content: {}};
            this.setState({
                categories: tasks,
                text: ""
            });
        }
        this.updateAsyncStorage();
    };

    deleteTask(title, category){
        let data = this.state.categories[category].content;
        delete data[title];
        this.setState(data);
        this.updateAsyncStorage();
    };



    //Processes data from state to be used in FlatList
    renderData(){
        let unprocessedData = this.state.categories;
        let data = [];
        for(let key in unprocessedData){
            data.push(unprocessedData[key])
        }
        return data;
    }

    addTask(title, content){
        let data = this.state.categories;
        data[title] = {
            title: title,
            content: content,
        };
        this.setState({categories: data});
        this.updateAsyncStorage();
    }

    deleteCategory(title){
        let data = this.state.categories;
        delete data[title];
        this.setState({categories: data});
        this.updateAsyncStorage();
    }

    renderCategoryItem(item, index){
        return(<TodoItemLink
                title={item.title}
                content={item.content}
                index={index}
                key={index}
                navigation={this.props.navigation}
                onClick={this.deleteTask}
                handleTaskChange={this.addTask}
                handleCategoryDelete={this.deleteCategory}
            />
        )
    }

    render(){
        return (
            <View style={[styles.container, { paddingBottom: this.state.viewMargin }]}>
                 <Text style={styles.title}>    TO-DO Categories    </Text>
                <FlatList
                    style={styles.list}
                    data={this.renderData()}
                    renderItem={({ item }) => this.renderCategoryItem(item)}
                    keyExtractor={(key, index) => index}

                    />
                <View style={styles.inputview}>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={this.changeTextHandler}
                        onSubmitEditing={this.addCategory}
                        value={this.state.text}
                        placeholder="Add new task"
                        returnKeyType="done"
                        returnKeyLabel="done"
                    />
                    <Button
                        title="Add"
                        onPress={this.addCategory}
                        color="#FF9505"
                        backgroundColor="red"
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 26,
        color: '#FF9505',
        textDecorationLine: 'underline',
        textDecorationColor: '#f2f2f2',
        paddingBottom: 10,
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        padding: viewPadding,
        paddingTop: 20
    },
    list: {
        width: "100%"
    },
    listItem: {
        paddingTop: 2,
        paddingBottom: 2,
        fontSize: 18
    },
    inputview:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end'
    },

    hr: {
        height: 1,
        backgroundColor: "grey"
    },
    listItemCont: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    textInput: {
        height: 40,
        paddingRight: 10,
        paddingLeft: 10,
        borderColor: "#FF9505",
        borderWidth: isAndroid ? 0 : 1,
        width: "90%",
    },
});
