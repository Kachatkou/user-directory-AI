import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import UserDirectoryFeature from "./userDirectory.feature";
import type { User } from "./user.model";

const mockUsers: User[] = [
  {
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
  },
];

beforeEach(() => {
  vi.stubGlobal(
    "fetch",
    async () =>
      ({
        ok: true,
        json: async () => mockUsers,
      } as Response)
  );
});

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("UserDirectoryFeature", () => {
  it("renders user table after fetch", async () => {
    render(<UserDirectoryFeature />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
    await waitFor(() =>
      expect(screen.getByText("Leanne Graham")).toBeInTheDocument()
    );
    expect(screen.getByText("Sincere@april.biz")).toBeInTheDocument();
    expect(screen.getByText("Romaguera-Crona")).toBeInTheDocument();
  });

  it("opens and closes user detail modal", async () => {
    render(<UserDirectoryFeature />);
    await waitFor(() =>
      expect(screen.getByText("Leanne Graham")).toBeInTheDocument()
    );
    fireEvent.click(screen.getByText("Leanne Graham"));
    expect(screen.getByText("Username:")).toBeInTheDocument();
    fireEvent.click(screen.getByLabelText("Close"));
    expect(screen.queryByText("Username:")).not.toBeInTheDocument();
  });

  it("deletes a user from the list", async () => {
    render(<UserDirectoryFeature />);
    await waitFor(() =>
      expect(screen.getByText("Leanne Graham")).toBeInTheDocument()
    );
    fireEvent.click(screen.getByLabelText("Delete user"));
    expect(screen.queryByText("Leanne Graham")).not.toBeInTheDocument();
  });
});
