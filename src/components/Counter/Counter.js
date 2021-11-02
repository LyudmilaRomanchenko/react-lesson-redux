import { connect } from "react-redux";
import * as actions from "../../redux/counter/counter-action";

function Counter({ value, step, onIncrement, onDecrement }) {
  return (
    <div>
      <span>{value}</span>
      <button type="button" onClick={() => onIncrement(step)}>
        Увеличить на {step}
      </button>
      <button type="button" onClick={() => onDecrement(step)}>
        Уменьшить на {step}
      </button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  value: state.counter.value,
  step: state.counter.step,
});

const mapDispatchToProps = (dispatch) => ({
  onIncrement: (value) => dispatch(actions.increment(value)),
  onDecrement: (value) => dispatch(actions.decrement(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
