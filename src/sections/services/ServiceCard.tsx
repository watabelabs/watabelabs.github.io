import { Service } from "./Service";

const ServiceCard = ({ service }: { service: Service }) => {
  return (
    <div className="service-card-redesigned">
      <span className="service-number-watermark">{service.number}</span>
      <div className="service-icon-wrap">
        <span style={{ fontSize: "1.5rem" }}>{service.icon}</span>
      </div>
      <h3 className="service-card-title">{service.title}</h3>
      <p className="service-card-tagline">{service.tagline}</p>
      <ul className="service-items-list">
        {service.items.slice(0, 4).map((item, i) => (
          <li key={i} className="service-item-row">
            <span className="service-item-dot" />
            {item}
          </li>
        ))}
        {service.items.length > 4 && (
          <li className="service-item-more">
            +{service.items.length - 4} more
          </li>
        )}
      </ul>
    </div>
  );
};
export default ServiceCard;
