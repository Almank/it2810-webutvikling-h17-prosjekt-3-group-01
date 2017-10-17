import React, { Component } from "react";
import {AppRegistry, StyleSheet, Text, View, FlatList, AsyncStorage, Button, TextInput, Keyboard, Platform} from "react-native";

const isAndroid = Platform.OS == "android";
const viewPadding = 10;

export class TodoList extends Component {
    state = {
        tasks: [],
        text: ""
    };

    changeTextHandler = text => {
    this.setState({ text: text });
    };

    addTask = () => {
        let notEmpty = this.state.text.trim().length > 0;

        if (notEmpty) {
            this.setState(
                prevState => {
                let { tasks, text } = prevState;
            return {
                tasks: tasks.concat({ key: tasks.length, text: text }),
                text: ""
            };
        },
            () => Tasks.save(this.state.tasks)
        );
        }
    };

    deleteTask = i => {
        this.setState(
            prevState => {
            let tasks = prevState.tasks.slice();

        tasks.splice(i, 1);

        return { tasks: tasks };
    },
        () => Tasks.save(this.state.tasks)
    );
};

componentDidMount() {
    Keyboard.addListener(
        isAndroid ? "keyboardDidShow" : "keyboardWillShow",
        e => this.setState({ viewMargin: e.endCoordinates.height + viewPadding })
);

    Keyboard.addListener(
        isAndroid ? "keyboardDidHide" : "keyboardWillHide",
        () => this.setState({ viewMargin: viewPadding })
);

    Tasks.all(tasks => this.setState({ tasks: tasks || [] }));
}

render(){
    return (
        <View style={[styles.container, { paddingBottom: this.state.viewMargin }]}>
            <Text style={styles.title}>    TO-DO    </Text>
            <FlatList
                style={styles.list}
                data={this.state.tasks}
                renderItem={({ item, index }) =>
            <View>
                <View style={styles.listItemCont}>
                    <Text style={styles.listItem}>
                        {item.text}
                    </Text>
                    <Button color="#FE642E" title="X" onPress={() => this.deleteTask(index)} />
                </View>
                <View style={styles.hr} />
                </View>}
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
                        onPress={() => this.addTask}
                        color="#FF9505"
                        backgroundColor="red"
                    />
                </View>
        </View>
        );
    }
}

    let Tasks = {
        convertToArrayOfObject(tasks, callback) {
            return callback(
                tasks ? tasks.split("||").map((task, i) => ({ key: i, text: task })) : []
        );
        },
        convertToStringWithSeparators(tasks) {
            return tasks.map(task => task.text).join("||");
        },
        all(callback) {
            return AsyncStorage.getItem("TASKS", (err, tasks) =>
                this.convertToArrayOfObject(tasks, callback)
        );
        },
        save(tasks) {
            AsyncStorage.setItem("TASKS", this.convertToStringWithSeparators(tasks));
        }
    };

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
        addButton: {
          color: 'red',
        },
    }
);

AppRegistry.registerComponent("TodoList", () => TodoList);
