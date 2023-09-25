import React from "react";

type TitleProps = {
  titleMessage: string
}

class Title extends React.Component<TitleProps> {
  state = {
    course: 'front-end',
    finished: false,
  }

  render() {
    const { titleMessage } = this.props
    const {course, finished} = this.state;
    return (
      <div>
        <h1>{titleMessage}</h1>
        <h2>{`Módulo : ${course}`}</h2>
        <button
        disabled={finished}
        onClick={() => this.setState({
          course: 'Back-end',
          finished: true
        })}
        >
          Finalizar curso
        </button>
        {finished && <h3>Curso finalizado!</h3>}
      </div>
    )
  }
}

export default Title;