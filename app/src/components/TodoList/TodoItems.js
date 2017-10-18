import React from 'react';
import {Text, View, FlatList, TextInput, Button, StyleSheet, Platform, Keyboard} from 'react-native';

const isAndroid = Platform.OS === "android";
const viewPadding = 10;

export class TodoItems extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            todos: this.props.navigation.state.params.content,
            text: "",
            viewMargin: 0,
        };

        this.addTask = this.addTask.bind(this);
        this.changeTextHandler = this.changeTextHandler.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
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

    //Processes data from state to be used in FlatList
    renderData(){
        let unprocessedData = this.state.todos;
        let data = [];
        for(let key in unprocessedData){
            data.push(unprocessedData[key])
        }
        return data;
    }

    deleteTask(item){
        this.props.navigation.state.params.onPress(item, this.props.navigation.state.params.title);
        let data = this.state.todos;
        delete data[item];
        this.setState(data);
    }

    renderCategoryItem(item){
        return(
            <View>
                <View style={styles.listItemCont}>
                    <Text style={styles.listItem}>
                        {item}
                    </Text>
                    <Button color="#FE642E" title="X" onPress={() => this.deleteTask(item)} />
                </View>
                <View style={styles.hr} />
            </View>
        )
    }

    addTask(){
        let todo = this.state.text;
        let todos = this.state.todos;
        todos[todo] = todo;
        this.setState({todos: todos});

        let title = this.props.navigation.state.params.title;
        let content = this.state.todos;
        this.props.navigation.state.params.handleTaskChange(title, content);
    }

    changeTextHandler(text){
        this.setState({ text: text });
    };

    render(){
        return (
            <View style={[styles.container, { paddingBottom: this.state.viewMargin }]}>
                <Text style={styles.title}>    TO-DO    </Text>
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
                        onSubmitEditing={this.addTask}
                        value={this.state.text}
                        placeholder="Add new task"
                        returnKeyType="done"
                        returnKeyLabel="done"
                    />
                    <Button
                        title="Add"
                        onPress={this.addTask}
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
