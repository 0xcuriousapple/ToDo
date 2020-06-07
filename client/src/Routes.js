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
    regsnackbaropen: false,
    signinsuc_bar: false,
    signinfail_bar: false,
    login: true,
  };

  initialState = {
    characters: [],

    user: {
      userHASH: "",
      listid: "",
      firstname: "",
      lastname: "guest",
    },
    regsnackbaropen: false,
    signinsuc_bar: false,
    signinfail_bar: false,
    login: true,
  };
  //this.setState({ characters: res.list })
  //Sync state with database
  loadlist = (listid) => {
    API.getList(listid)
      .then((res) => this.setState({ characters: res.data.list }))
      .catch((err) => console.log(err));
  };

  //Send list to db
  sendList = () => {
    if (!this.state.login) {
      const { characters } = this.state;
      let obj = {
        list: characters,
      };
      API.updateList(this.state.user.listid, obj)
        .then((res) => console.log("list modified", res))
        .catch((err) => console.log(err));
    }
  };

  //Remove Task
  removeCharacter = (index) => {
    const { characters } = this.state;

    this.setState(
      {
        characters: characters.filter((character, i) => {
          return i !== index;
        }),
      },
      this.sendList
    );

    // this.sendList();
  };

  //Modify Task | Changing  label,priority,....
  modify = (index, id, value) => {
    console.log(id);
    const { characters } = this.state;
    characters[index][id] = value;
    this.setState({ characters }, this.sendList);
  };

  //Add task
  handleSubmit = (character) => {
    this.setState(
      { characters: [...this.state.characters, character] },
      this.sendList
    );
    //this.sendList();
  };

  signIn = (cred) => {
    console.log(cred);
    let uhash = sha256(cred.email + cred.password);
    uhash = uhash.toString(CryptoJS.enc.Hex);
    API.getListId(uhash)
      .then((res) => {
        console.log(res.data[0]);
        if (typeof res.data[0] === "undefined") {
          const t = this.state;
          t.signinfail_bar = true;
          this.setState(t);
        } else {
          this.setState({
            user: {
              firstname: res.data[0].firstname,
              lastname: res.data[0].lastname,
              userHASH: res.data[0].userHASH,
              listid: res.data[0].listid,
            },
          });
          this.loadlist(res.data[0].listid);
          const t = this.state;
          t.signinsuc_bar = true;
          this.setState(t);

          const te = this.state;
          te.login = false;
          this.setState(te);
        }
      })
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
            const te = this.state;
            te.login = false;
            this.setState(te);
            const t = this.state;
            t.regsnackbaropen = true;
            this.setState(t);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };

  signout = () => {
    this.setState(this.initialState);
  };
  reghandleClose = () => {
    const t = this.state;
    t.regsnackbaropen = false;
    this.setState(t);
  };
  signinsuc_close = () => {
    const t = this.state;
    t.signinsuc_bar = false;
    this.setState(t);
  };
  signinfail_close = () => {
    const t = this.state;
    t.signinfail_bar = false;
    this.setState(t);
  };
  render() {
    const { characters } = this.state;
    const { user } = this.state;
    const { login } = this.state;
    return (
      <div>
        <Snackbar
          open={this.state.regsnackbaropen}
          autoHideDuration={3000}
          onClose={this.reghandleClose}
        >
          <Alert onClose={this.reghandleClose} severity="success">
            Congratulations! you are sucessfully registered in our database.
          </Alert>
        </Snackbar>

        <Snackbar
          open={this.state.signinsuc_bar}
          autoHideDuration={3000}
          onClose={this.signinsuc_close}
        >
          <Alert onClose={this.signinsuc_close} severity="success">
            Congratulations! you are signed in !
          </Alert>
        </Snackbar>

        <Snackbar
          open={this.state.signinfail_bar}
          autoHideDuration={5000}
          onClose={this.signinfail_close}
        >
          <Alert onClose={this.signinfail_close} severity="error">
            Incorrect Email or Password, Please Sign In again.
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
            userData={user}
            loginflag={login}
            handleSubmit={this.handleSubmit}
            removeCharacter={this.removeCharacter}
            signIN={this.signIn}
            signUP={this.signUp}
            signOUT={this.signout}
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
