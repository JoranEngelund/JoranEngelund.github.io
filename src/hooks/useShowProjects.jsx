import { useState } from "react";

const useShowProjects = () => {
  const [showTermofrakt, setShowTermofrakt] = useState(false);
  const [showHolidaze, setShowHolidaze] = useState(false);
  const [showBidit, setShowBidit] = useState(false);
  const [showEvolve, setShowEvolve] = useState(false);
  const [showAbout, setShowAbout] = useState(true);
  const [showContact, setShowContact] = useState(false);

  const handleShowTermofrakt = () => {
    setShowHolidaze(false);
    setShowBidit(false);
    setShowEvolve(false);
    setShowAbout(false);
    setShowContact(false);
    setShowTermofrakt(true);
  };

  const handleShowAbout = () => {
    setShowHolidaze(false);
    setShowBidit(false);
    setShowEvolve(false);
    setShowTermofrakt(false);
    setShowContact(false);
    setShowAbout(true);
  };

  const handleShowHolidaze = () => {
    setShowHolidaze(true);
    setShowBidit(false);
    setShowEvolve(false);
    setShowTermofrakt(false);
    setShowAbout(false);
    setShowContact(false);
  };

  const handleShowBidit = () => {
    setShowHolidaze(false);
    setShowBidit(true);
    setShowEvolve(false);
    setShowTermofrakt(false);
    setShowAbout(false);
    setShowContact(false);
  };

  const handleShowEvolve = () => {
    setShowHolidaze(false);
    setShowBidit(false);
    setShowEvolve(true);
    setShowTermofrakt(false);
    setShowAbout(false);
    setShowContact(false);
  };

  const handleShowContact = () => {
    setShowHolidaze(false);
    setShowBidit(false);
    setShowEvolve(false);
    setShowTermofrakt(false);
    setShowAbout(false);
    setShowContact(true);
  };

  return {
    handleShowAbout,
    handleShowBidit,
    handleShowEvolve,
    handleShowHolidaze,
    handleShowTermofrakt,
    handleShowContact,
    showAbout,
    showBidit,
    showEvolve,
    showHolidaze,
    showTermofrakt,
    showContact,
  };
};

export default useShowProjects;
