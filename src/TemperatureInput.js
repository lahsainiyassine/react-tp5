function TemperatureInput({ scale = 'c', temperature, onTemperatureChange, label }) {
  const scaleNames = {
    c: 'Celsius (°C)',
    f: 'Fahrenheit (°F)'
  };

  return (
    <div className="form-group">
      <label>{label || `Température en ${scaleNames[scale] || '°C'} :`}</label>
      <input
        type="number"
        value={temperature}
        onChange={(e) => onTemperatureChange(e.target.value)}
        placeholder={scale === 'f' ? 'Température °F' : 'Température °C'}
      />
    </div>
  );
}

export default TemperatureInput;
