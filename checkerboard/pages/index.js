import MainContainer from './../containers/MainContainer';

// prefer containerizing as you will notice.
// if styled components were not in place, would have opted to do similar styling
// via individual folders for components with the style sheet close by for easy maintenance


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
