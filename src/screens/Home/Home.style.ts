import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    // height: '100%',
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  listContainer: {
    // height: '90%',
    flex: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 200,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 15,
    elevation: 2,
    width: '40%',
  },
  buttonCnfrm: {
    backgroundColor: '#4285F4',
  },
  buttonClose: {
    backgroundColor: 'red',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 30,
    textAlign: 'center',
    color: 'black',
    fontSize: 18,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  emptyTasksScreenContainer: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: 100,
  },
  imageStyle: {
    height: '50%',
    width: '90%',
  },
  initialTextStyle: {
    color: 'white',
    fontSize: 20,
  },
});
