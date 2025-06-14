import "./Info.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function InfoComp({ info }) {
  return (
    <div className="inner">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image="https://images.unsplash.com/photo-1545134969-8debd725b007"
          alt="Weather Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <p>Temperature: {info.temp}°C</p>
            <p>Humidity: {info.humidity}%</p>
            <p>Feels Like: {info.feels_like}°C</p>
            <p>Description: {info.description}</p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}