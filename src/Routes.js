import React, { Component } from "react";
import { Switch, Redirect } from "react-router-dom";
import sha256 from "crypto-js/sha256";
import CryptoJS from "crypto-js";
import { RouteWithLayout } from "./components";
import { Main as MainLayout, Minimal as MinimalLayout } from "./layouts";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import API from "./API/API";

import {
  Dashboard as DashboardView,
  Home as HomeView,
  ProductList as ProductListView,
  UserList as UserListView,
  Typography as TypographyView,
  Icons as IconsView,
  Account as AccountView,
  Settings as SettingsView,
  SignUp as SignUpView,
  SignIn as SignInView,
  NotFound as NotFoundView,
} from "./views";
import { Password } from "views/Settings/components";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class Routes extends Component {
  state = {
    characters: [],

    user: {
      userHASH: "",
      listid: "",
      firstname: "",
      lastname: "guest",
    },
    snackbaropen: false,
  };

  //this.setState({ characters: res.list })
  //Sync state with database
  // loadlist = () => {
  //   API.getList('5edab058eada6aad8c6f5c86')
  //     .then(res => this.setState({ characters: res.data.list }))
  //     .catch(err => console.log(err));

  // };
  // componentDidMount() {
  //   this.loadlist();
  // }

  //Remove Task
  removeCharacter = (index) => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      }),
    });
  };

  //Modify Task | Changing  label,priority,....
  modify = (index, id, value) => {
    console.log(id);
    const { characters } = this.state;
    characters[index][id] = value;
    this.setState({ characters });
  };

  //Add task
  handleSubmit = (character) => {
    this.setState({ characters: [...this.state.characters, character] });
  };

  signIn = (cred) => {
    console.log(cred);
    let uhash = sha256(cred.email + cred.password);
    uhash = uhash.toString(CryptoJS.enc.Hex);

    API.getListId(uhash)
      .then((res) => {})
      .catch((err) => console.log(err));
  };

  signUp = (cred) => {
    console.log(cred.email);
    let uhash = sha256(cred.email + cred.password);
    uhash = uhash.toString(CryptoJS.enc.Hex);
    // console.log(uhash);

    API.createList()
      .then((res) => {
        this.setState({
          user: {
            firstname: cred.firstName,
            lastname: cred.lastName,
            userHASH: uhash,
          },
        });
        const temp = this.state;
        temp.user.listid = res.data._id;
        this.setState(temp);
        console.log(this.state.user);

        console.log(this.state);
        const { user } = this.state;
        console.log(user);
        API.createUser(user)
          .then((res) => {
            const t = this.state;
            t.snackbaropen = true;
            this.setState(t);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };
  handleClose = () => {
    const t = this.state;
    t.snackbaropen = false;
    this.setState(t);
  };
  render() {
    const { characters } = this.state;
    return (
      <div>
        <Snackbar
          open={this.state.snackbaropen}
          autoHideDuration={5000}
          onClose={this.handleClose}
        >
          <Alert onClose={this.handleClose} severity="success">
            Congratulations! you are sucessfully registered in our database.
          </Alert>
        </Snackbar>
        <Switch>
          <Redirect exact from="/" to="/home" />
          <RouteWithLayout
            component={DashboardView}
            exact
            layout={MainLayout}
            path="/dashboard"
          />
          <RouteWithLayout
            component={HomeView}
            exact
            path="/home"
            characterData={characters}
            handleSubmit={this.handleSubmit}
            removeCharacter={this.removeCharacter}
            signIN={this.signIn}
            signUP={this.signUp}
            modify={this.modify}
          />
          <RouteWithLayout
            component={UserListView}
            exact
            layout={MainLayout}
            path="/users"
          />
          <RouteWithLayout
            component={ProductListView}
            exact
            layout={MainLayout}
            path="/products"
          />
          <RouteWithLayout
            component={TypographyView}
            exact
            layout={MainLayout}
            path="/typography"
          />
          <RouteWithLayout
            component={IconsView}
            exact
            layout={MainLayout}
            path="/icons"
          />
          <RouteWithLayout
            component={AccountView}
            exact
            layout={MainLayout}
            path="/account"
          />
          <RouteWithLayout
            component={SettingsView}
            exact
            layout={MainLayout}
            path="/settings"
          />
          <RouteWithLayout
            component={SignUpView}
            exact
            layout={MinimalLayout}
            path="/sign-up"
          />
          <RouteWithLayout
            component={SignInView}
            exact
            layout={MinimalLayout}
            path="/sign-in"
          />
          <RouteWithLayout
            component={NotFoundView}
            exact
            layout={MinimalLayout}
            path="/not-found"
          />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    );
  }
}

export default Routes;
