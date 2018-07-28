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
    borderColor: '#3498db',
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
  buttonText: {
    color: '#fff',
    fontSize: 16
  },
  modalContainer: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)'
  },
  bodyContainer: {
    width: '100%',
    borderRadius: 10,
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
    width: '100%',
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopColor: '#3498db',
    borderTopWidth: 1,
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 2
  },
  descText: {
    fontSize: 14,
    color: '#565656',
    marginTop: 2
  },
  titleErrorText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 2
  },
  errorText: {
    fontSize: 14,
    color: '#95a5a6',
    marginTop: 2
  },
});

export default styles
