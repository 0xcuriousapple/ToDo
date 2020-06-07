export default () => {

    var today = new Date();
    var dd = String(today.getDate());
    var mm = String(today.getMonth() + 1); //January is 0!
    var yyyy = today.getFullYear();

    today = dd + '-' + mm
    return today;
}
