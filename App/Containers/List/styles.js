import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  textInput: {
    height: 50,
    width: 250,
    borderColor: '#3498db',
    borderWidth: 1,
    margin: 10,
  },
  title: {
    justifyContent:'center',
    alignItems: 'center',
    width: 100,
    height: 40,
  },
  button: {
    width: 60,
    height: 40,
    borderRadius: 5,
    backgroundColor: '#3498db',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14
  },
  modalContainer: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)'
  },
  bodyContainer: {
    flex:1,
  },
  header: {
    paddingTop: 20,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    backgroundColor: '#3498db',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopColor: '#3498db',
    borderTopWidth: 1,
    backgroundColor: '#fff'
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 2
  },
  descText: {
    fontSize: 14,
    color: '#565656',
    marginTop: 2
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems:'center'
  },
  nameText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 2
  },
});

export default styles
