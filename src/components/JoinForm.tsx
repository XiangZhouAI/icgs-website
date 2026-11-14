"use client";

import { FormEvent, useState } from "react";
import type { Dictionary } from "@/i18n/dictionaries";

export function JoinForm({ dict }: { dict: Dictionary }) {
  const [done, setDone] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setDone(true);
  }

  if (done) {
    return (
      <div className="form-success" role="status">
        <h3>{dict.join.successTitle}</h3>
        <p>{dict.join.successBody}</p>
      </div>
    );
  }

  return (
    <form className="join-form" onSubmit={onSubmit}>
      <p className="form-note">{dict.join.formNote}</p>

      <label>
        <span>
          {dict.join.fields.fullName}{" "}
          <em>({dict.common.required})</em>
        </span>
        <input name="fullName" required autoComplete="name" />
      </label>

      <label>
        <span>
          {dict.join.fields.email} <em>({dict.common.required})</em>
        </span>
        <input name="email" type="email" required autoComplete="email" />
      </label>

      <div className="form-row">
        <label>
          <span>{dict.join.fields.phone}</span>
          <input name="phone" type="tel" autoComplete="tel" />
        </label>
        <label>
          <span>{dict.join.fields.wechat}</span>
          <input name="wechat" autoComplete="off" />
        </label>
      </div>

      <label>
        <span>
          {dict.join.fields.experience}{" "}
          <em>({dict.common.required})</em>
        </span>
        <select name="experience" required defaultValue="">
          <option value="" disabled>
            —
          </option>
          {dict.join.experienceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>

      <label>
        <span>{dict.join.fields.handicap}</span>
        <input name="handicap" placeholder="e.g. 18 / N/A" />
      </label>

      <label>
        <span>{dict.join.fields.message}</span>
        <textarea name="message" rows={4} />
      </label>

      <button type="submit" className="btn btn-primary">
        {dict.common.send}
      </button>
    </form>
  );
}
