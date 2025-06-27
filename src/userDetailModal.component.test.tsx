import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import UserDetailModal from "./userDetailModal.component";
import type { User } from "./user.model";
import { describe, expect, it, vi } from "vitest";

describe("UserDetailModal", () => {
  const user: User = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: { lat: "-37.3159", lng: "81.1496" },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  };

  it("renders all user details", () => {
    render(<UserDetailModal user={user} onClose={() => {}} />);
    expect(screen.getByText("Leanne Graham")).toBeInTheDocument();
    expect(screen.getByText("Username:")).toBeInTheDocument();
    expect(screen.getByText("Sincere@april.biz")).toBeInTheDocument();
    expect(screen.getByText("Romaguera-Crona")).toBeInTheDocument();
    expect(screen.getByText("View on Map")).toBeInTheDocument();
  });

  it("calls onClose when close button is clicked", () => {
    const onClose = vi.fn();
    render(<UserDetailModal user={user} onClose={onClose} />);
    fireEvent.click(screen.getByLabelText("Close"));
    expect(onClose).toHaveBeenCalled();
  });
});
