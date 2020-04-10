import MainContainer from './../containers/MainContainer';

export default () => (
  <div className='main'>
    <MainContainer />
    <style jsx>{`
      .main {
        margin: auto;
        min-width: 420px;
        padding: 10px;
        box-sizing: border-box;
        min-height: 420px;
      }
    `}</style>
  </div>
);
