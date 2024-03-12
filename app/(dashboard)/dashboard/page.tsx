export default function Dashboard() {
  return (
    <div>
      Dashboard
      - get all user roles, and get the active role based on what the user choose
      from the dropdown menu, or get the highest role (seller is higher than user/marketer)
      or simply save the active role in the url ?role=seller
      - show the dashboard based on the current active role.
      use components for each dashboard, if the dashboard mostly are the same
      then add all static/similar section in the main dashboard/page.tsx
      and the different (or dynamic) sections in their own components.
      and group the role-specific sections in a component for easy import.
    </div>
  )
}
