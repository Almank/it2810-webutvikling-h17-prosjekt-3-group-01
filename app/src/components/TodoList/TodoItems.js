import React from 'react';
import {Text, View, FlatList, TextInput, StyleSheet, Platform, Keyboard} from 'react-native';
import {Button} from 'react-native-elements';

const isAndroid = Platform.OS === "android";

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
        this.deleteCategory = this.deleteCategory.bind(this);
    }

    componentDidMount() {
        this.keyboardListener1 = Keyboard.addListener(
            isAndroid ? "keyboardDidShow" : "keyboardWillShow",
            e => this.setState({ viewMargin: e.endCoordinates.height - 40})
        );

        this.keyboardListener2 = Keyboard.addListener(
            isAndroid ? "keyboardDidHide" : "keyboardWillHide",
            () => this.setState({ viewMargin: 10 })
        );
    }

    componentWillUnmount () {
        this.keyboardListener1.remove();
        this.keyboardListener2.remove();
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

    deleteCategory(){
        let properties = this.props.navigation.state.params;
        properties.deleteCategory(properties.title);
        this.props.navigation.goBack();
    }

    renderCategoryItem(item){
        return(
            <View>
                <View style={styles.listItemCont}>
                    <Text style={styles.listItem}>
                        {item}
                    </Text>
                    <Button title="X"
                            onPress={() => this.deleteTask(item)}
                            backgroundColor={'transparent'}
                            color={'rgba(0,0,0,0.3)'}
                    />
                </View>
                <View style={styles.hr} />
            </View>
        )
    }

    addTask(){
        let todo = this.state.text;
        let todos = this.state.todos;
        todos[todo] = todo;
        this.setState({
            todos: todos,
            text: "",
        });

        let title = this.props.navigation.state.params.title;
        let content = this.state.todos;
        this.props.navigation.state.params.handleTaskChange(title, content);
    }

    changeTextHandler(text){
        this.setState({ text: text });
    };

    render(){
        let properties = this.props.navigation.state.params;
        return (
            <View style={[styles.container, { paddingBottom: this.state.viewMargin }]}>
                <Text style={styles.title}>{properties.title}</Text>
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
                        color="white"
                        backgroundColor="#FF9505"
                    />
                </View>
                <Button title="Delete Category"
                        onPress={this.deleteCategory}
                        backgroundColor={'transparent'}
                        color={'rgba(255,0,0,0.4)'}
                />
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
        padding: 10,
        paddingTop: 20
    },
    list: {
        width: "100%",
        flexBasis:'20%',
    },
    listItem: {
        paddingTop: 2,
        paddingBottom: 2,
        fontSize: 18
    },
    inputview:{
        flexBasis:60,
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
        width: "80%",
        marginLeft:5,
        backgroundColor:'white',
    },
    delBtn: {
        backgroundColor: 'transparent',
        color:'black',
    }
});
