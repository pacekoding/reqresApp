import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  textInput: {
    height: 50,
    width: 250,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
  },
  button: {
    width: 250,
    height: 50,
    borderRadius: 5,
    backgroundColor: '#3498db',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  text: {
    color: '#D50000',
    fontSize: 10,
    padding: 2,
    fontWeight: 'bold'
  },
  modalContainer: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)'
  },
  bodyContainer: {
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: '#FFFFFF'
  },
  headerModal: {
    paddingTop: 20,
    paddingLeft: 16,
    paddingBottom: 16
  },
  buttonClose : {
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 12
  },
  closeText: {
    color: '#ffff',
    fontSize: 14
  },
  itemContainer: {
    height: 62
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 2
  },
  descText: {
    fontSize: 14,
    color: '#565656',
    marginTop: 2
  },
  rowTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#201717',
    marginTop: 2
  },
});

export default styles
