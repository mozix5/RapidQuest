# React Dashboard Readme

This React application is a dashboard providing an overview of financial data and retirement information. It is hosted on [rapid-quest.vercel.app](https://rapid-quest.vercel.app/). Below is a concise explanation of the components and pages included in the application.

## Components

### 1. `CustomBarChart`

The `CustomBarChart` component renders a responsive and interactive bar chart using the Recharts library. It visualizes contributions over time, including employer contributions, employee contributions, and total interest.

### 2. `CircularProgress`

The `CircularProgress` component displays a circular progress indicator with a customizable percentage. This is useful for visualizing completion or progress in a circular format.

### 3. `SideBar`

The `SideBar` component represents the responsive sidebar navigation of the application. It includes icons for sections like home, profile, feed, list, and notifications.

## Pages

### 1. `App`

The `App` component is the main entry point, defining the structure of the dashboard. It includes the sidebar and main content area, utilizing the `react-router-dom` library for page navigation.

### 2. `Home`

The `Home` page is the main dashboard view, displaying financial information, recent transactions, retirement income details, sliders for adjusting retirement strategy, and visualizations like the bar chart and circular progress indicators.

### 3. `Feed`

The `Feed` page is a placeholder for displaying financial news or relevant information.

### 4. `List`

The `List` page is another placeholder that can be expanded to show a list of items or data.

### 5. `Profile`

The `Profile` page is dedicated to user profile information, displaying a profile picture, a greeting message, and other relevant details.

## Usage

To access the hosted application, visit [rapid-quest.vercel.app](https://rapid-quest.vercel.app/). To run the application locally:

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Run the application with `npm start`.
